import { Dialog, DialogClose, DialogContent, DialogTitle } from 'vamdesign-portfolio'

// The case-study image lightbox (app/uc/*/details): borderless transparent
// content, sr-only title, teal round close button over the image.
export const Lightbox = () => (
  <Dialog defaultOpen modal={false}>
    <DialogContent className="max-h-[90vh] max-w-[90vw] overflow-hidden border-none bg-transparent p-0 shadow-none">
      <DialogTitle className="sr-only">Image Preview</DialogTitle>
      <div className="relative flex h-full w-full items-center justify-center">
        <img
          src="/images/wellsfargo/nav_and_information_before.png"
          alt="Enlarged view"
          className="max-h-[85vh] max-w-full rounded-lg object-contain"
        />
        <DialogClose
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#007EA7]/80 text-white transition-colors hover:bg-[#007EA7]"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
)
