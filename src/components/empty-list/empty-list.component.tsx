import React from "react";
import { IonIcon, IonLabel } from "@ionic/react";
import './empty-list.component.css';

const EmptyList = () => {
  return (
    <div className="empty-list">
      <IonIcon icon="folder-open-outline" />
      <span className="empty-list-title">Empty List</span>
      <span className="empty-list-subtitle">
        Tap '+' button at the top to add items
      </span>
    </div>
  );
};

export default EmptyList;