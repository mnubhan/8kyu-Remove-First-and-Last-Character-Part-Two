def array(string):
    return None if len(string) < 3 or len(string.split(","))<3  else " ".join(string.split(",")[1:len(string.split(","))-1])
