import {watchLogin, watchSignUp} from './loginSaga';
import {all} from 'redux-saga/effects';
import {
  watchgetProductByCategoriesChildSaga,
  watchgetProducts,
  watchgetProductsByCategories,
  watchgetProductsById,
} from './productSaga';
import {watchGetUserById, watchUpdateUserById} from './userSaga';
import {watchGetCartbyUser, watchUpdateCartbyCart} from './cartSaga';
import {watchGetStore, watchGetStoreById} from './storeSaga';
import {
  watchAddBill,
  watchgetBill,
  watchgetBillById,
  watchGetBillDetailById,
} from './billSaga';
import {
  watchEditLike,
  watchGetLikeByUser,
  watchRemoveLike,
  watchStatusLike,
} from './likeSaga';
import {watchGetFavorite, watchGetFavoriteById} from './favoriteSaga';
import {
  watchAddComment,
  watchGetComment,
  watchgetCountComment,
} from './commentSaga';
import {watchGetNotificationByUser} from './notificationSaga';
import {watchGetCategory} from './categoriesSaga';
export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignUp(),
    watchgetProducts(),
    watchGetUserById(),
    watchUpdateUserById(),
    watchgetProductsByCategories(),
    watchgetProductsById(),
    watchGetCartbyUser(),
    watchUpdateCartbyCart(),
    watchGetStore(),
    watchGetStoreById(),
    watchAddBill(),
    watchgetBill(),
    watchgetBillById(),
    watchgetProductByCategoriesChildSaga(),

    watchEditLike(),
    watchStatusLike(),
    watchRemoveLike(),
    watchGetFavorite(),
    watchGetFavoriteById(),
    watchGetBillDetailById(),
    watchGetComment(),
    watchAddComment(),
    watchGetLikeByUser(),
    watchGetNotificationByUser(),
    watchGetCategory(),
    watchgetCountComment(),
  ]);
}
