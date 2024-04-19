import { useCallback } from "react";
import { Alert, View } from "react-native";
import { CaretLeft, Fingerprint } from "phosphor-react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

import { SafeArea } from "../../styles/safe-area"
import { ButtonText, BiometryScreenView, BiometryButton, HeaderButton, SectionView, SmallText, TitleContainer, TitleText, primaryColor } from "./style"

interface BiometryScreenProps {
  navigation: NavigationProp<ParamListBase>
}

export const BiometryScreen = ({ navigation }: BiometryScreenProps) => {
  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [])

  const askPermissionForBiometry = useCallback((available: boolean, biometryType: string, saveBiometryKeyCallback?: () => void | Promise<void>): void => {
    if (available && biometryType === BiometryTypes.Biometrics) {
      Alert.alert(
        'Biometry',
        'Would you like to enable Biometry authentication for the next time?',
        [
          {
            text: 'Yes please',
            onPress: saveBiometryKeyCallback
          },
          { text: 'Cancel', style: 'cancel' },
        ],
      );
    }
  }, [])

  const handleAuthenticateWithBiometry = useCallback(async (userID: string, rnBiometricsInstance: ReactNativeBiometrics) => {
    const timestamp = Math.round(
      new Date().getTime() / 1000,
    ).toString();
    const payload = `${userID}__${timestamp}`;

    const { success, signature } = await rnBiometricsInstance.createSignature(
      {
        promptMessage: 'Sign in',
        payload,
      },
    );

    if (!success) {
      Alert.alert("Oops!",
        "Validation With Biometry fails, try again"
      )
    } else {
      console.log(`Must now checks into database the publicKey linked with the user and validates if signature is valid between storaged into database: ${signature}`)
    }

  }, [])

  const handleGetBiometry = useCallback(async () => {
    // Here can be the real logged user
    const userId = "Jonh Doe"
    // Here you can get from AsyncStorage one 
    const storagedUserHasPermission = true

    const rnBiometrics = new ReactNativeBiometrics();

    const { available, biometryType } =
      await rnBiometrics.isSensorAvailable();


    if (!storagedUserHasPermission) {
      askPermissionForBiometry(available, biometryType!, async () => {
        // Here you can storage the user choice to nos ask every time for faceID

        // Here is the generated Public key from SSH to storage into database
        const { publicKey } = await rnBiometrics.createKeys();

        console.log(`Must to link that publicKey to user in database: ${publicKey}`)

        await handleAuthenticateWithBiometry(userId, rnBiometrics)
      })
    } else {
      if (biometryType !== BiometryTypes.Biometrics) {
        Alert.alert(
          'Oops!',
          'Biometry is not available on this device.',
        );
        return;
      }

      await handleAuthenticateWithBiometry(userId, rnBiometrics)
    }
  }, [])

  return (
    <SafeArea>
      <BiometryScreenView>
        <View>
          <HeaderButton onPress={handleGoBack}>
            <CaretLeft size={20} weight="bold" color={primaryColor} />
          </HeaderButton>
        </View>

        <TitleContainer>
          <TitleText>Testing Biometry</TitleText>
          <SmallText>Click at button bellow to test it.</SmallText>
        </TitleContainer>

        <SectionView>
          <BiometryButton onPress={handleGetBiometry}>
            <Fingerprint size={24} weight="bold" color="white" />
            <ButtonText>Try Biometry</ButtonText>
          </BiometryButton>
        </SectionView>

      </BiometryScreenView>
    </SafeArea>
  )
}
