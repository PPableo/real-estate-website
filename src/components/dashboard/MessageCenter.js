'use client';
export default function MessageCenter(){
    return(
        <main className="pt-24 pb-16">
            <div>
                <h1>You have 1 new message</h1>
                <p>&quot;Hey I was just woundering when we might be able to schedule an appoinment?&quot;</p>
                <br/>
                <form>
                    <label>Reply</label>
                    <br/>
                    <textarea></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </main>
    )
}