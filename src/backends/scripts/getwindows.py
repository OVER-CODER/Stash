import win32gui
import win32process
import psutil


def enum_windows_callback(hwnd, results):
    if win32gui.IsWindowVisible(hwnd) and win32gui.GetWindowText(hwnd):
        results.append(hwnd)


windows = []
win32gui.EnumWindows(enum_windows_callback, windows)


def get_window_details(hwnd):

    title = win32gui.GetWindowText(hwnd)
    try:
        _, pid = win32process.GetWindowThreadProcessId(hwnd)
        proc = psutil.Process(pid)
        exe_path = proc.exe()
    except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
        exe_path = None

    rect = win32gui.GetWindowRect(hwnd)
    x, y = rect[0], rect[1]
    width, height = rect[2] - rect[0], rect[3] - rect[1]

    return {
        'title': title,
        'exe_path': exe_path,
        'x': x,
        'y': y,
        'width': width,
        'height': height
    }

blacklist_path = ["C:\Windows\SystemApps\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TextInputHost.exe", "C:\Windows\System32\ApplicationFrameHost.exe", "C:\Windows\ImmersiveControlPanel\SystemSettings.exe"]
blacklist_title = ["Program Manager"]

for hwnd in windows:
    details = get_window_details(hwnd)
    if details['exe_path'] not in blacklist_path and details['title'] not in blacklist_title:
        print(f"Title: {details['title']}")
        print(f"Executable Path: {details['exe_path']}")
        print(f"Position: ({details['x']}, {details['y']})")
        print(f"Size: {details['width']}x{details['height']}\n")