import React from "react";
import { AppState, Linking } from "react-native";
import Trustchex, { handleDeepLink } from "@trustchex/react-native-sdk";

const App = () => {
  const appState = React.useRef(AppState.currentState);
  const [baseUrl, setBaseUrl] = React.useState<string | undefined>(
    "https://app.trustchex.com"
  );
  const [sessionId, setSessionId] = React.useState<string>("");

  React.useEffect(() => {
    const handleInitialDeepLink = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        const [bUrl, sId] = handleDeepLink({ url });
        if (bUrl && sId) {
          setBaseUrl(bUrl);
          setSessionId(sId);
        }
      }
    };

    const handleIncomingLink = ({ url }: { url: string }) => {
      const [bUrl, sId] = handleDeepLink({ url });
      if (bUrl && sId) {
        setBaseUrl(bUrl);
        setSessionId(sId);
      }
    };

    Linking.addEventListener("url", handleIncomingLink);
    handleInitialDeepLink();

    const subscription = AppState.addEventListener("change", (nextAppState) => {
      appState.current = nextAppState;
      handleInitialDeepLink();
    });

    return () => {
      Linking.removeAllListeners("url");
      subscription.remove();
    };
  }, [appState]);

  return (
    <Trustchex
      baseUrl={baseUrl}
      sessionId={sessionId}
      onCompleted={() => {
        // console.log('Verification completed');
      }}
      onError={(_error) => {
        // console.error('Verification error:', error);
      }}
    />
  );
};

export default App;
