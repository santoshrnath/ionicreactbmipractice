import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const InputControl: React.FC<{
  selectedValue: "mtr" | "ft";
  onChangeUnits: (value: "mtr" | "ft") => void;
}> = (props) => {
  const inputChangeHandler = (event: CustomEvent) => {
    props.onChangeUnits(event.detail.value);
  };

  return (
    <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="mtr">
        <IonLabel>Metrics</IonLabel>
      </IonSegmentButton>

      <IonSegmentButton value="ft">
        <IonLabel>feet</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
