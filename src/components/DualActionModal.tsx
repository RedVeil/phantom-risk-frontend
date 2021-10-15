import React from "react";

export interface DualActionModalProps {
  title: string;
  content: React.ReactElement | string;
  onDismiss: { label: string; onClick: Function };
  onConfirm: { label: string; onClick: Function };
  visible: boolean;
}

export const DefaultDualActionModalProps = {
  content: "",
  title: "",
  onConfirm: { label: "", onClick: () => {} },
  onDismiss: { label: "", onClick: () => {} },
  visible: false,
};

export const DualActionModal: React.FC<DualActionModalProps> = ({
  title,
  content,
  onDismiss,
  onConfirm,
  visible,
}) => {
  return visible ? (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                {title}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{content}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
              onClick={() => onConfirm.onClick && onConfirm.onClick()}
            >
              {onConfirm.label}
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
              onClick={() => onDismiss.onClick && onDismiss.onClick()}
            >
              {onDismiss.label}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default DualActionModal;
