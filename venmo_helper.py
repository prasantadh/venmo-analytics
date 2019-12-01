def print_schema(obj, level=0):
    if type(obj) == type({}):
        if level == 0: print('{', end= '')

        # print the simple types first
        keys = list(key for key, value in obj.items() if type(value) != type({}))
        for i in range(len(keys)):
            if i % 6 == 0:
                print('\n' + '\t' * (level + 1), end='')
            print(keys[i], end=', ' if i != len(keys) - 1 else ' ')

        # then print the complex types
        keys = list(key for key, value in obj.items() if type(value) == type({}))
        for key in keys:
                print('\n' + '\t' * (level + 1) + key, end = ' {')
                print_schema(obj[key], level+1)
        print('}', end='')

if '__name__' == '__main__':
    print('only some helper functions available')
