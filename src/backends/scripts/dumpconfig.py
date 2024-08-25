import json

data = ["hehe", "1 2 3 4"]


def writejson(file, data):
    with open(file, "w") as file:
        json.dump(data, file, indent=4)

def dump_config(data, name, lastActive):
    conf = {
        "name": name,
        "lastActive": lastActive,
        "details": data,
    }
    writejson(f"{name}.sex", conf)

def read_config(name):
    with open(f"{name}.sex", "r") as file:
        data = json.load(file)
    return data

def process_data(data):
    title = data["details"]["title"]
    executable_path = data["details"]["executable_path"]
    position = data["details"]["position"]
    size = data["details"]["size"]

    print("\nProcessing Data:")
    print(f"Title: {title}")
    print(f"Executable Path: {executable_path}")
    print(f"Position: ({position['x']}, {position['y']})")
    print(f"Size: {size['width']}x{size['height']}")


if __name__ == "__main__":

    data = [["hehe", "1 2 3 4"], ["hehe", "1 2 3 4"]]

    dump_config(data=data, name="test", lastActive=2345678)

    read_data = read_config("test")
    print(read_data)
    print(read_data["details"])
