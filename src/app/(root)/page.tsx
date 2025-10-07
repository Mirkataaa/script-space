import { SignInButton, SignOutButton } from "@clerk/nextjs";
import EditorPanelComponent from "./_components/EditorPanelComponent";
import HeaderComponent from "./_components/HeaderComponent";
import OutputPanelComponent from "./_components/OutputPanelComponent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <SignInButton ></SignInButton>
        <SignOutButton></SignOutButton>
        <HeaderComponent />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanelComponent />
          <OutputPanelComponent />
        </div>
      </div>
    </div>
  );
}
