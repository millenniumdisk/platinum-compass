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
