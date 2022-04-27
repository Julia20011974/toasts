import question from '@/images/question.svg';
import success from '@/images/success.svg';
import warning from '@/images/warning.svg';
import error from '@/images/error.svg';

export function getImage(img) {
  return () => {
    switch (img) {
      case 'info': {
        return question;
      }
      case 'success': {
        return success;
      }
      case 'warning': {
        return warning;
      }
      case 'error': {
        return error;
      }
      default:
        return new Error('not found img');
    }
  };
}
