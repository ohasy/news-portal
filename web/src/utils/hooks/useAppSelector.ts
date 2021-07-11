import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { StoreState } from '@/utils/types';
import { AppDispatch } from '@/store/store';

export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
