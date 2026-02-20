# Platinum Compass

## Git Commands

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

- initialize git in the current project directory and create a .git folder
```bash
git init
```

- check status of git project
```bash
git status
```

see the commits in the git project (analyze the history of changes)
```bash
git log
```

add a file to staging area
```bash
git add python-notes.txt
```

unstage file (state of file will change to untracked or modified)
```bash
git rm --cached postgresql-notes.txt
```

stage all untracked and modified files
```bash
git add .
```

- create a commit with description (description is inside double quotes)
```bash
git commit -m "Initial commit"
```
