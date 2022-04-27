/* eslint-disable react/jsx-props-no-spreading */
import React, { useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';
import { useToastPortal, useAutoCloseToast } from '../../hooks';
import { Toast } from '../../components/Toast';
import { ToastService } from '../../services/ToastService';

const service = ToastService.getInstance();

export const ToastPortal = React.forwardRef(({ location }, ref) => {
  const [toasts, setToasts] = useState([]);
  const { loaded, portalId } = useToastPortal(location);

  function remove(id) {
    return () => setToasts(service.removeToast(id));
  }
  useAutoCloseToast(toasts, remove);

  useImperativeHandle(ref, () => ({
    add: (prop) => {
      if (toasts.length !== 3) setToasts(service.addToast(prop));
    }
  }));

  return loaded
    ? ReactDOM.createPortal(
        <div>
          {toasts.map((t) => (
            <Toast key={t.id} {...t} onClose={remove(t.id)} />
          ))}
        </div>,
        document.getElementById(portalId)
      )
    : null;
});
