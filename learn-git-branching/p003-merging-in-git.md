Merges bugFix into main when main branch is the current branch.
It is like main branch got the updates from bugFix branch.

While main is current branch, merge bugFix to main branch.
```bash
git merge bugFix
```

The bugFix branch didn't get the updates from main branch that is why the commit it is pointing to didn't change.

Merge main into bugFix.

Checkout bugFix then merge main to bugFix. bugFix will only move to the same commit that main is pointing to.
```bash
git checkout bugFix
git merge main
```
