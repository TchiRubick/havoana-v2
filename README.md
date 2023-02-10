## How to install prisma?
-**Install in terminal:**
```
npx prisma

npm install @prisma/client

npx prisma init

``` 

## How to install planetscale?

-**Open in powershell and install:**

```

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time

irm get.scoop.sh | iex

After close the powershell

```

-**Open cmd and install:**

```

scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git

scoop install pscale mysql

pscale auth login

pscale org switch h2

pscale connect h2 dev --port 3309

```

-**In .env** 

```
DATABASE_URL="mysql://root@127.0.0.1:3309/prisma-playground"

```

In terminal:

```

npx prisma db push

```







