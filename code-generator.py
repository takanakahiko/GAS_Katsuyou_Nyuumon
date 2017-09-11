#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys

if __name__ == '__main__':

    if len(sys.argv)<3:
        print "Not enough arguments"
        sys.exit()

    sourceFileName =  sys.argv[1]
    sectionNumber = int(sys.argv[2])

    input_f = open(sourceFileName)
    lines = input_f.readlines()
    input_f.close()

    count = 1
    isReading = False

    for line in lines:
        if line.count("強調"):
            continue
        elif (not isReading) and (line=="```js\r\n") :
            isReading = True
            output_f = open("%d章/%d-%d.gs" % (sectionNumber, sectionNumber, count), "a")
        elif isReading and (line=="```\r\n"):
            isReading = False
            output_f.close()
            count += 1
        elif isReading :
            output_f.writelines(line)