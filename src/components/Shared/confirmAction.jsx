import { toast } from 'react-hot-toast'

export const confirmAction = ({
  message,
  confirmText = 'Yes',
  cancelText = 'No',
  onConfirm,
  onCancel,
}) => {
  toast(
    (t) => (
      <div className="flex flex-col items-center gap-2">
        <p className="text-center text-sm font-semibold">{message}</p>
        <div className="flex gap-2">
          <button
            className="rounded bg-green-500 px-2 py-1 font-bold text-white hover:bg-green-700"
            onClick={() => {
              onConfirm()
              toast.dismiss(t.id)
            }}
          >
            {confirmText}
          </button>
          <button
            className="rounded bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700"
            onClick={() => {
              onCancel()
              toast.dismiss(t.id)
            }}
          >
            {cancelText}
          </button>
        </div>
      </div>
    ),
    {
      duration: 8000,
    },
  )
}
