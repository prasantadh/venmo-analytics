use venmo
venmo = db.venmo

// create a view for users who commented
db.userWhoCommented.drop()
db.createView(
    "userWhoCommented",
    "venmo",
    [{
        $match:
        {
            "comments.count":
            {
                $gte : 1
            }
        },
    },
    {
        $unwind: "$comments.data"
    },
    {
        $project:
        {
            'username' : "$comments.data.user.username",
            'last_name' : "$comments.data.user.last_name",
            'friends_count' : "$comments.data.user.friends_count",
            'is_group' : "$comments.data.user.is_group",
            'is_active' : "$comments.data.user.is_active",
            'trust_request' : "$comments.data.user.trust_request",
            'phone' : "$comments.data.user.phone",
            'is_blocked' : "$comments.data.user.is_blocked",
            'id' : "$comments.data.user.id",
            'identity' : "$comments.data.user.identity",
            'date_joined' : "$comments.data.user.date_joined",
            'about' : "$comments.data.user.about",
            'display_name' : "$comments.data.user.display_name",
            'first_name' : "$comments.data.user.first_name",
            'friend_status' : "$comments.data.user.friend_status",
            'email' : "$comments.data.user.email",
            '_id' : 0
        }
    }]
);

// create a vew for users who have liked transactions
db.userWhoLiked.drop()
db.createView(
    "userWhoLiked",
    "venmo",
    [{
        $match:
        {
            "likes.count":
            {
                $gte : 1
            }
        },
    },
    {
        $unwind: "$likes.data"
    },
    {
        $project:
        {
            'username'	    : "$likes.data.username",
            'last_name'	    : "$likes.data.last_name",
            'friends_count'	: "$likes.data.friends_count",
            'is_group'	    : "$likes.data.is_group",
            'is_active'	    : "$likes.data.is_active",
            'trust_request'	: "$likes.data.trust_request",
            'phone'	        : "$likes.data.phone",
            'is_blocked'	: "$likes.data.is_blocked",
            'id'	        : "$likes.data.id",
            'identity'	    : "$likes.data.identity",
            'date_joined'	: "$likes.data.date_joined",
            'about'	        : "$likes.data.about",
            'display_name'	: "$likes.data.display_name",
            'first_name'	: "$likes.data.first_name",
            'friend_status'	: "$likes.data.friend_status",
            'email'	        : "$likes.data.email",
            '_id' : 0
        }
    }]
);

// create a view for uses who have paid
db.userWhoPaid.drop()
db.createView(
    "userWhoPaid",
    "venmo",
    [{
        $project:
        {
            'username' : "$payment.actor.username",
            'last_name' : "$payment.actor.last_name",
            'friends_count' : "$payment.actor.friends_count",
            'is_group' : "$payment.actor.is_group",
            'is_active' : "$payment.actor.is_active",
            'trust_request' : "$payment.actor.trust_request",
            'phone' : "$payment.actor.phone",
            'is_blocked' : "$payment.actor.is_blocked",
            'id' : "$payment.actor.id",
            'identity' : "$payment.actor.identity",
            'date_joined' : "$payment.actor.date_joined",
            'about' : "$payment.actor.about",
            'display_name' : "$payment.actor.display_name",
            'first_name' : "$payment.actor.first_name",
            'friend_status' : "$payment.actor.friend_status",
            'email' : "$payment.actor.email",
            '_id' : 0
        }
    }]
);

// create a view for users who have received payments
db.userWhoReceived.drop()
db.createView(
    "userWhoReceived",
    "venmo",
    [{
        $project:
        {
            'username'	    : "$payment.target.user.username",
            'last_name'	    : "$payment.target.user.last_name",
            'friends_count'	: "$payment.target.user.friends_count",
            'is_group'	    : "$payment.target.user.is_group",
            'is_active'	    : "$payment.target.user.is_active",
            'trust_request'	: "$payment.target.user.trust_request",
            'phone'	        : "$payment.target.user.phone",
            'is_blocked'	: "$payment.target.user.is_blocked",
            'id'	        : "$payment.target.user.id",
            'identity'	    : "$payment.target.user.identity",
            'date_joined'	: "$payment.target.user.date_joined",
            'about'	        : "$payment.target.user.about",
            'display_name'	: "$payment.target.user.display_name",
            'first_name'	: "$payment.target.user.first_name",
            'friend_status'	: "$payment.target.user.friend_status",
            'email'	        : "$payment.target.user.email",
            '_id'	        : 0
        }
    }]
);

// create a view for users who were mentioned
db.userWhoWasMentioned.drop()
db.createView(
    "userWhoWasMentioned",
    "venmo",
    [{
        $match:
        {
            "mentions.count":
            {
                $gte : 1
            }
        },
    },
    {
        $unwind: "$mentions.data"
    },
    {
        $project:
        {
            'username' : "$mentions.data.user.username",
            'last_name' : "$mentions.data.user.last_name",
            'friends_count' : "$mentions.data.user.friends_count",
            'is_group' : "$mentions.data.user.is_group",
            'is_active' : "$mentions.data.user.is_active",
            'trust_request' : "$mentions.data.user.trust_request",
            'phone' : "$mentions.data.user.phone",
            'is_blocked' : "$mentions.data.user.is_blocked",
            'id' : "$mentions.data.user.id",
            'identity' : "$mentions.data.user.identity",
            'date_joined' : "$mentions.data.user.date_joined",
            'about' : "$mentions.data.user.about",
            'display_name' : "$mentions.data.user.display_name",
            'first_name' : "$mentions.data.user.first_name",
            'friend_status' : "$mentions.data.user.friend_status",
            'email' : "$mentions.data.user.email",
            '_id' : 0
        }
    }]
);
