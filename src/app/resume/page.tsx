import { redirect } from "next/navigation";

export default function ResumeRedirect() {
  redirect("https://github.com/calvincchan/calvincchan/blob/master/Resume-Calvin-C-Chan.pdf");
  return null;
}
