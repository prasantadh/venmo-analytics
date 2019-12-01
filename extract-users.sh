#! /bin/bash
function export-users-who() {
    cmd="mongoexport -d venmo -c $1 --type csv --fields "
    for field in username last_name friends_count is_group is_active trust_request phone is_blocked id identity date_joined about display_name first_name friend_status; do
        cmd+=$field
        cmd+=","
    done
    cmd+="email"
    cmd+=" -o $1.csv"
    echo $cmd
    $cmd
}


function collect-users() {
    head -n 1 userWhoPaid.csv > users.csv
    sed -s 1d userWho*.csv >> users.csv
    echo $cmd
}

mongo < users.js
for user in userWhoPaid userWhoReceived userWhoLiked userWhoCommented userWhoWasMentioned; do
    export-users-who $user
done;
collect-users
