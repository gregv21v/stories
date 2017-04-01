import os

angularStr = "[" # the string to put in angular

for f in os.listdir("."):
    if (not ".txt" in f and not ".py" in f):
        angularStr += "{ name: \"" + f + "\"},\n"

angularStr += "]\n"

f = open("ang.txt", "w")
f.write(angularStr)
