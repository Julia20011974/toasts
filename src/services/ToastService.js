/* eslint-disable no-plusplus */

export class ToastService {
  constructor() {
    this.instance = null;
    this.idishka = 0;
    this.toasts = [];

    if (this.instance) {
      throw new Error('You can only create one instance!');
    }
    this.instance = this;
  }

  getInstance() {
    return this.instance;
  }

  addToast(prop) {
    this.idishka++;
    this.toasts = [...this.toasts, { ...prop, id: this.idishka }];
    return this.toasts;
  }

  removeToast(id) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    return this.toasts;
  }
}

export const service = new ToastService();
