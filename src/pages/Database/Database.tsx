import React from "react";
import {
  IonLabel,
  IonPage,
  IonContent,
} from "@ionic/react";
import PageHeader from "../../components/PageHeader/PageHeader";

interface DatabaseProps {}

function Database({}: DatabaseProps) {
  return (
    <IonPage>
      <PageHeader title={"Database"} />

      <IonContent>
          <IonLabel>REEE</IonLabel>
      </IonContent>
    </IonPage>
  );
}

export default Database;
