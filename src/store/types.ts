import itemInterface from '../models';
interface modalState {
  isModalHidden: boolean;
}
interface mealState {
  items: itemInterface[];
  totalAmount: number;
}
interface RootState {
  modal: modalState;
  meal: mealState;
}

export default RootState;
