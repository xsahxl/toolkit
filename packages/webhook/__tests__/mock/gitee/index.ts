export const GItEE_PAYLOAD = {
  path: "/webhook",
  method: 'POST',
  url: '/webhook?sign=QKedo%2B8%2B8wLGq%2Bby16Y2vv9T1G6i5W3B7IX215AnJeI%3D&timestamp=1660621033738',
  headers: {
    accept: '*/*',
    'accept-encoding': 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
    'content-length': '5400',
    'content-type': 'application/json',
    host: 'bstdqhmgok.cn-hangzhou.fcapp.run',
    'user-agent': 'git-oschina-hook',
    'x-forwarded-proto': 'https',
    'x-git-oschina-event': 'Push Hook',
    'x-gitee-event': 'Push Hook',
    'x-gitee-ping': 'true',
    'x-gitee-timestamp': '1660621033738',
    'x-gitee-token': 'QKedo+8+8wLGq+by16Y2vv9T1G6i5W3B7IX215AnJeI='
  },
  body: JSON.stringify({
    "ref": "refs/heads/test_version",
    "before": "3a6902040b2fd1e240315a84611d36eef14b4f2f",
    "after": "ad2f7b1729eea675cd44da48f5e53abdf8f242a8",
    "created": false,
    "deleted": false,
    "compare": "https://gitee.com/oschina/gitee/compare/3a6902040b2fd1e240315a84611d36eef14b4f2f...ad2f7b1729eea675cd44da48f5e53abdf8f242a8",
    "commits": [
      {
        "id": "3a6902040b2fd1e240315a84611d36eef14b4f2f",
        "tree_id": "ad2f7b1729eea675cd44da48f5e53abdf8f242a8",
        "parent_ids": [
          "ad2f7b1729eea675cd44da48f5e53abdf8f242a8"
        ],
        "distinct": true,
        "message": "这是一条测试 Push 类型 WebHook 触发的推送",
        "timestamp": "2020-04-15T21:09:40+08:00",
        "url": "https://gitee.com/oschina/gitee/commit/3a6902040b2fd1e240315a84611d36eef14b4f2f",
        "author": {
          "time": "2020-04-15T21:09:40+08:00",
          "id": 1,
          "name": "Gitee",
          "email": "gitee@gitee.com",
          "username": "oschina-org",
          "user_name": "oschina-org",
          "url": "https://gitee.com/oschina-org"
        },
        "committer": {
          "id": 1,
          "name": "Gitee",
          "email": "gitee@gitee.com",
          "username": "oschina-org",
          "user_name": "oschina-org",
          "url": "https://gitee.com/oschina-org"
        },
        "added": null,
        "removed": null,
        "modified": [
          "README.md"
        ]
      }
    ],
    "head_commit": {
      "id": "3a6902040b2fd1e240315a84611d36eef14b4f2f",
      "tree_id": "ad2f7b1729eea675cd44da48f5e53abdf8f242a8",
      "parent_ids": [
        "ad2f7b1729eea675cd44da48f5e53abdf8f242a8"
      ],
      "distinct": true,
      "message": "这是一条测试 Push 类型 WebHook 触发的推送",
      "timestamp": "2020-04-15T21:09:40+08:00",
      "url": "https://gitee.com/oschina/gitee/commit/3a6902040b2fd1e240315a84611d36eef14b4f2f",
      "author": {
        "time": "2020-04-15T21:09:40+08:00",
        "id": 1,
        "name": "Gitee",
        "email": "gitee@gitee.com",
        "username": "oschina-org",
        "user_name": "oschina-org",
        "url": "https://gitee.com/oschina-org"
      },
      "committer": {
        "id": 1,
        "name": "Gitee",
        "email": "gitee@gitee.com",
        "username": "oschina-org",
        "user_name": "oschina-org",
        "url": "https://gitee.com/oschina-org"
      },
      "added": null,
      "removed": null,
      "modified": [
        "README.md"
      ]
    },
    "total_commits_count": 1,
    "commits_more_than_ten": false,
    "repository": {
      "id": 151,
      "name": "Gitee FeedBack",
      "path": "git-osc",
      "full_name": "oschina/git-osc",
      "owner": {
        "login": "oschina-org",
        "avatar_url": "https://gitee.com/assets/favicon.ico",
        "html_url": "https://gitee.com/oschina-org",
        "type": "User",
        "site_admin": false,
        "id": 1,
        "name": "Gitee",
        "email": "gitee@gitee.com",
        "username": "oschina-org",
        "user_name": "oschina-org",
        "url": "https://gitee.com/oschina-org"
      },
      "private": false,
      "html_url": "https://gitee.com/oschina/git-osc",
      "url": "https://gitee.com/oschina/git-osc",
      "description": "",
      "fork": false,
      "created_at": "2020-04-15T21:09:40+08:00",
      "updated_at": "2020-04-15T21:09:40+08:00",
      "pushed_at": "2020-04-15T21:09:40+08:00",
      "git_url": "git://gitee.com:oschina/git-osc.git",
      "ssh_url": "git@gitee.com:oschina/git-osc.git",
      "clone_url": "https://gitee.com/oschina/git-osc.git",
      "svn_url": "svn://gitee.com/oschina/git-osc",
      "git_http_url": "https://gitee.com/oschina/git-osc.git",
      "git_ssh_url": "git@gitee.com:oschina/git-osc.git",
      "git_svn_url": "svn://gitee.com/oschina/git-osc",
      "homepage": null,
      "stargazers_count": 11,
      "watchers_count": 12,
      "forks_count": 0,
      "language": "ruby",
      "has_issues": true,
      "has_wiki": true,
      "has_pages": false,
      "license": null,
      "open_issues_count": 0,
      "default_branch": "master",
      "namespace": "oschina",
      "name_with_namespace": "OSCHINA/git-osc",
      "path_with_namespace": "oschina/git-osc"
    },
    "project": {
      "id": 151,
      "name": "Gitee FeedBack",
      "path": "git-osc",
      "full_name": "oschina/git-osc",
      "owner": {
        "login": "oschina-org",
        "avatar_url": "https://gitee.com/assets/favicon.ico",
        "html_url": "https://gitee.com/oschina-org",
        "type": "User",
        "site_admin": false,
        "id": 1,
        "name": "Gitee",
        "email": "gitee@gitee.com",
        "username": "oschina-org",
        "user_name": "oschina-org",
        "url": "https://gitee.com/oschina-org"
      },
      "private": false,
      "html_url": "https://gitee.com/oschina/git-osc",
      "url": "https://gitee.com/oschina/git-osc",
      "description": "",
      "fork": false,
      "created_at": "2020-04-15T21:09:40+08:00",
      "updated_at": "2020-04-15T21:09:40+08:00",
      "pushed_at": "2020-04-15T21:09:40+08:00",
      "git_url": "git://gitee.com:oschina/git-osc.git",
      "ssh_url": "git@gitee.com:oschina/git-osc.git",
      "clone_url": "https://gitee.com/oschina/git-osc.git",
      "svn_url": "svn://gitee.com/oschina/git-osc",
      "git_http_url": "https://gitee.com/oschina/git-osc.git",
      "git_ssh_url": "git@gitee.com:oschina/git-osc.git",
      "git_svn_url": "svn://gitee.com/oschina/git-osc",
      "homepage": null,
      "stargazers_count": 11,
      "watchers_count": 12,
      "forks_count": 0,
      "language": "ruby",
      "has_issues": true,
      "has_wiki": true,
      "has_pages": false,
      "license": null,
      "open_issues_count": 0,
      "default_branch": "master",
      "namespace": "oschina",
      "name_with_namespace": "OSCHINA/git-osc",
      "path_with_namespace": "oschina/git-osc"
    },
    "user_id": 1,
    "user_name": "Gitee",
    "user": {
      "id": 1,
      "name": "Gitee",
      "email": "gitee@gitee.com",
      "username": "oschina-org",
      "user_name": "oschina-org",
      "url": "https://gitee.com/oschina-org"
    },
    "pusher": {
      "id": 1,
      "name": "Gitee",
      "email": "gitee@gitee.com",
      "username": "oschina-org",
      "user_name": "oschina-org",
      "url": "https://gitee.com/oschina-org"
    },
    "sender": {
      "login": "oschina-org",
      "avatar_url": "https://gitee.com/assets/favicon.ico",
      "html_url": "https://gitee.com/oschina-org",
      "type": "User",
      "site_admin": false,
      "id": 1,
      "name": "Gitee",
      "email": "gitee@gitee.com",
      "username": "oschina-org",
      "user_name": "oschina-org",
      "url": "https://gitee.com/oschina-org"
    },
    "enterprise": {
      "name": "OSCHINA",
      "url": "https://gitee.com/oschina"
    },
    "hook_name": "push_hooks",
    "hook_id": 1147023,
    "hook_url": "https://gitee.com/wss-ee/shltest-3k4x/hooks/1147023/edit",
    "password": "",
    "timestamp": "1660621033738",
    "sign": "QKedo+8+8wLGq+by16Y2vv9T1G6i5W3B7IX215AnJeI="
  })
};
