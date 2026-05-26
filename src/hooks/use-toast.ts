import { toast } from "sonner"

export function useToast() {
  const showSuccess = (message: string, description?: string) => {
    toast.success(message, {
      description,
    })
  }

  const showError = (message: string, description?: string) => {
    toast.error(message, {
      description,
    })
  }

  const showInfo = (message: string, description?: string) => {
    toast.info(message, {
      description,
    })
  }

  const showWarning = (message: string, description?: string) => {
    toast.warning(message, {
      description,
    })
  }

  const showLoading = (message: string, description?: string) => {
    return toast.loading(message, {
      description,
    })
  }

  const dismiss = (toastId?: string | number) => {
    if (toastId) {
      toast.dismiss(toastId)
    } else {
      toast.dismiss()
    }
  }

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning,
    showLoading,
    dismiss,
    toast,
  }
}
