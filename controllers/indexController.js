function gg(req, res, next) {
    res.send({ "sadf": "asdfadf" })
}

function yo(req, res, next) {
    res.send(
        {
            "boy": "sdfds",
            "adsf": "adfs   "
        }
    )
}

exports.yo = yo

exports.gg = gg