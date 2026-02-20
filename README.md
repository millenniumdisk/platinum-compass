# Platinum Compass

## Git Commands

### Git Configuration
- set the username where double quotes are needed if name contains a space (--global means this applies to all repositories of the current user)
```bash
git config --global user.name "Millennium Disk"
```

- set the email
```bash
git config --global user.email millenniumdiskette@gmail.com
```

- see the configuration of git
```bash
git config --list
```

### Git Initialization
- initialize git in the current project directory and create a .git folder
```bash
git init
```

### Git Checking
- check status of git project
```bash
git status
```

- see the commits in the git project (analyze the history of changes)
```bash
git log
```

### Git Staging
- add a file to staging area
```bash
git add python-notes.txt
```

- unstage a file (state of file will change to untracked or modified)
```bash
git rm --cached postgresql-notes.txt
```

- stage all untracked and modified files
```bash
git add .
```

### Git Commit
- create a commit with description (description is inside double quotes)
```bash
git commit -m "Initial commit"
```

### Git Branch
- list all local branches and currently checked out branch will be marked with asterisk
```bash
git branch
```

- create a new branch and no spaces allowed in branch name (bugFix is name of branch)
```bash
git branch bugFix
```

- check out a specific branch or commit with hash (detached head state)
```bash
git checkout bugFix
```

- delete a specific branch. With -d, you can only delete merged branch. If branch was not merged, you will not be able to do that with -d. You should use forced delete with capital D or -D
```bash
git branch -d bugFix
```

- rename a specific branch (changes name from temp to new-temp)
```bash
git branch -m temp new-temp
```

- create a branch and checking it out automatically. If you use -b option, this branch that you specify should be absent at this moment and only in this case the branch will be created and automatically checked out (create BR-1 branch)
```bash
git checkout -b BR-1
```

### Git Clone
- clone a repository that includes .git folder using the web URL of the repository (URL changes depending on the user / owner and repository name)
```bash
git clone https://github.com/millenniumdisk/platinum-compass.git
```
