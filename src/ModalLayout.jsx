function ModalLayout({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose} 
    >
      <div
        className="w-full max-w-3xl bg-surface rounded-2xl max-h-[92vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;