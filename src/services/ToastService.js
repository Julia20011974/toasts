/* eslint-disable no-plusplus */

export class ToastService {
  constructor() {
    this.instance = null;
    this.id = 0;
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
    this.id++;
    this.toasts = [...this.toasts, { ...prop, id: this.id }];
    return this.toasts;
  }

  removeToast(id) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    return this.toasts;
  }
}

export const service = Object.freeze(new ToastService());
