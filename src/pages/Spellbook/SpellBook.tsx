import { IonContent, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

interface SpellBookProps {
}

function SpellBook({ }: SpellBookProps) {
  return (
    <IonPage>
      <PageHeader title={"Database"} />

      <IonContent>
        <IonLabel>REEE</IonLabel>
      </IonContent>
    </IonPage>
  );
}

export default SpellBook;
