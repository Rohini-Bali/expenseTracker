class Solution:
    def isValid(s):
        # print(ord(s[0]),ord(s[1]))
        for i in range(0,len(s)):
            x=ord(s[i])
            y=s[i+1]
            y=ord(y)
            if y==(x+1):
                if i+2 < len(s):
                    i=i+2
                else:
                    break;
            else:
                return False
        return True
        
print(Solution.isValid("()[]{}"))