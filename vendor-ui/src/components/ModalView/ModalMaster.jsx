import React, { Component } from "react";
import ViewTagsModal from "./ViewTagsModal";
import ViewInvoiceModal from "./ViewInvoiceModal";
import ReactDOM from "react-dom";
import ChangeClientModal from "./ChangeClientModal";
import PaymentReminderModal from "./PaymentReminderModal";
import NewInvoiceModal from "./NewInvoiceModal";
import ViewTicketModal from "./ViewTicketModal";

const modalRoot = document.getElementById("modal-root");

export default class ModalMaster extends Component {
  render() {
    return ReactDOM.createPortal(
      <React.Fragment>
        <ViewTagsModal />
        <ViewInvoiceModal />
        <ChangeClientModal />
        <PaymentReminderModal />
        <NewInvoiceModal />
        <ViewTicketModal />
      </React.Fragment>,
      modalRoot
    );
  }
}
