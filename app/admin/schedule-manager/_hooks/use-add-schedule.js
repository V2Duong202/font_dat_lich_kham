import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addSchedule } from '../_services/schedule-service';
import { App } from 'antd';

export const useAddSchedule = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (data) => {
      return addSchedule(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['schedules'] });
      message.success('Tạo lịch trình thành công!');
    },
    onError: () => {
      message.error('Tạo lịch trình không thành công!');
    },
  });
};
