import test from "ava"
import pName from "."

test("main", (t) => {
    t.is(pName, "pname")
})
