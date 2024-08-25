import json

data = [
    [1, "PowerShell Window", "Details of the PowerShell window instance",
     "C:\\Program Files\\WindowsApps\\Microsoft.PowerShell_7.4.5.0_x64__8wekyb3d8bbwe\\pwsh.exe",
     "C:\\Program Files\\WindowsApps\\Microsoft.WindowsTerminal_1.20.11781.0_x64__8wekyb3d8bbwe\\WindowsTerminal.exe",
     [-25600, -25600], [159, 27]
    ],
    [2, "Another Window", "Details of another window instance",
     "C:\\Path\\To\\AnotherApp.exe",
     "C:\\Path\\To\\AnotherExecutable.exe",
     [100, 200], [800, 600]
    ]

]

def writejson(file, data):
    with open(file, 'w') as file:
        json.dump(data, file, indent=4)

def readjson(file):
    with open(file, 'r') as file:
        data = json.load(file)
    return data

def process_data(data):
    title = data['details']['title']
    executable_path = data['details']['executable_path']
    position = data['details']['position']
    size = data['details']['size']
    
    print("\nProcessing Data:")
    print(f"Title: {title}")
    print(f"Executable Path: {executable_path}")
    print(f"Position: ({position['x']}, {position['y']})")
    print(f"Size: {size['width']}x{size['height']}")

if __name__ == "__main__":
    
    # arr = [
    #     ["C:\Program Files\WindowsApps\Microsoft.PowerShell_7.4.5.0_x64__8wekyb3d8bbwe\pwsh.exe"],
    #     ["C:\Program Files\WindowsApps\Microsoft.WindowsTerminal_1.20.11781.0_x64__8wekyb3d8bbwe\WindowsTerminal.exe"],
    #     ["(-25600, -25600)"]
    # ]
       
    file = 'tppp.json'
    
    writejson(file, arr)  
    
    read_data = readjson(file)

    process_data(read_data)
