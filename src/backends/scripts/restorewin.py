import win32gui
import win32process
import psutil
import subprocess
import time


def enum_windows_callback(hwnd, results):
    if win32gui.IsWindowVisible(hwnd) and win32gui.GetWindowText(hwnd):
        results.append((hwnd, win32gui.GetWindowText(hwnd)))


def start_and_position_window(exe, pos):
    if exe:
        proc = subprocess.Popen(exe)
        pid = proc.pid
        print(pid)
        time.sleep(1)
        print("idhar agaya")
        wins = []
        win32gui.EnumWindows(enum_windows_callback, wins)
        print(wins)
        hwnd = None
        for i in wins:
            print(i, pid)
            if win32process.GetWindowThreadProcessId(i[0])[1] == pid:
                hwnd = i[0]
                break

        # pos = [int(i) for i in pos.split(" ")]
        try:
            win32gui.MoveWindow(hwnd, pos[0], pos[1], pos[2], pos[3], True)
        except:
            pass


def restore_windows_to_original_state(windows):
    print(windows)
    for exe, pos in windows:
        start_and_position_window(exe, pos)
