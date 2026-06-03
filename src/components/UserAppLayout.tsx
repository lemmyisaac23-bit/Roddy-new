import { UserSidebar, type UserSidebarProps } from "@/components/UserSidebar";

type UserAppLayoutProps = {
  children: React.ReactNode;
  topBar?: React.ReactNode;
} & UserSidebarProps;

/** Shared shell for logged-in pages: sidebar + scroll-safe main area */
export function UserAppLayout({ children, topBar, ...sidebarProps }: UserAppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {topBar}
      <div className="flex min-h-0">
        <UserSidebar hasTopBar={Boolean(topBar)} {...sidebarProps} />
        <div className="flex min-w-0 flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
}
