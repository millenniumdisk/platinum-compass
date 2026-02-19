When current branch is bugFix, rebase to main branch.

It is like creating new updates from bugFix and putting it on top of main branch.

Main branch didn't change so it is still pointing to its commit.

When bugFix is the current branch, a new copy of the commit in bugFix will be placed on top of the main branch and bugFix will move and point to that new copy. It will look as if the two features or two branches were developed one after another but in reality they were developed simultaneously.
```bash
git rebase main
```

If main is current branch, rebase to bugFix. main will point to bugFix because main was an ancestor of bugFix.
```bash
git rebase bugFix
```
