Merges bugFix into main when main branch is the current branch.
It is like main branch got the updates from bugFix branch.
```bash
git merge bugFix
```

The bugFix branch didn't get the updates from main branch that is why the commit it is pointing to didn't change.

Merge main into bugFix.
```bash
git checkout bugFix
git merge main
```
