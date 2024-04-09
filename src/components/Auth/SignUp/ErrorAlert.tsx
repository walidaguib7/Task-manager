import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import "./style.css";

type AlertProps = {
  error: string;
  func: () => void;
};

const ErrorAlert = ({ error, func }: AlertProps) => {
  return (
    <div className="my-container">
      <AlertDialog open>
        <AlertDialogContent className="w-fit">
          <AlertDialogHeader>
            <AlertDialogTitle className="w-full text-center">
              Error
            </AlertDialogTitle>
            <AlertDialogDescription className="w-full text-center mb-4">
              {error}
            </AlertDialogDescription>
            <AlertDialogCancel className="btn" onClick={func}>
              Cancel
            </AlertDialogCancel>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ErrorAlert;
