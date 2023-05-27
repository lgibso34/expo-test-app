import * as React from "react";
import { AccessibilityInfo, findNodeHandle } from "react-native";

export const useFocus = (refComponent?: React.RefObject<any>) => {
  const setFocus = React.useCallback(
    (
      component:
        | null
        | number
        | React.Component<any, any>
        | React.ComponentClass<any>
    ) => {
      const elementId = findNodeHandle(component);

      if (elementId) {
        AccessibilityInfo.setAccessibilityFocus(elementId);
        AccessibilityInfo.setAccessibilityFocus(elementId);
      } else if (__DEV__) {
        console.warn(`useFocus: Ref element not found`);
      }
    },
    []
  );

  React.useEffect(() => {
    if (!refComponent) {
      return;
    }

    setFocus(refComponent.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refComponent]);

  return {
    setFocus,
  };
};
