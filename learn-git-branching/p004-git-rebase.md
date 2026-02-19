When current branch is bugFix, rebase to main branch.

It is like creating new updates from bugFix and putting it on top of main branch.

Main branch didn't change so it is still pointing to its commit.
```bash
git rebase main
```

If main is current branch, it will just point to bugFix when rebasing it to bugFix.
```bash
git rebase bugFix
```
