import { Toaster as Sonner, toast } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>
type ToastFn = (message: string, options?: Parameters<typeof toast.success>[1]) => void

export const Toaster = ({ ...props }: ToasterProps) => {
    return <Sonner {...props} />
}

// 成功時のトースト表示
export const SuccessToast: ToastFn = (message, options) => {
  toast.success(message, {
    ...options,
  })
}

// エラー時のトースト表示
export const ErrorToast: ToastFn = (message, options) => {
  toast.error(message, {
    duration: Infinity,
    closeButton: true,
    dismissible: true,
    ...options,
  })
}