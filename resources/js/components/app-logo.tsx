import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <AppLogoIcon className="size-6 text-[#f53003] dark:text-[#FF4433]" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="truncate text-xl leading-none font-semibold">EventTrack</span>
            </div>
        </>
    );
}
