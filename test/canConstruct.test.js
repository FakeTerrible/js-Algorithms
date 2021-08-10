import { canConstruct } from "../Algorithm/canConstruct";

test("can construct", ()=>{
    let ransomNote = "aa";
    let magazine = "aab";
    expect(canConstruct(ransomNote, magazine)).toStrictEqual(true);
})