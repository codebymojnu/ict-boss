import { Checkbox, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const Nirdesona = () => {
    const [checked, setChecked] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const nirdeSona = [
        'কোর্সে ভর্তি ফি জমা দেয়ার শেষ তারিখ ২৭ শে মার্চ রাত ১২ টা পর্যন্ত।', 
    '01788262433 নাম্বারে বিকাশে কোর্স ফি পরিশোধ করে তোমার মোবাইল নাম্বার আর ট্রানজেকশন ইনফরমেশন দিয়ে এই গরূপে জয়েন করো।',
    'https://www.facebook.com/groups/279188571029867',
    'পরিচিতি ক্লাস ২৮ শে মার্চ রাত ৮ টায়। প্রতি সপ্তাহে বুধ, বৃহস্পতি এবং শুক্রবার ক্লাস হবে Google MEET App এ ।',  
    'প্রত্যেকটা ক্লাস শেষে অনলাইনে MCQ পরীক্ষা নেয়া হবে', 
    'যারা যারা এই কোর্সটি করবে তাদের প্রত্যেককে একটি ওয়েবসাইট তৈরি করে দিবো। এই ওয়েবসাইটের লিংক তোমার বন্ধুদের সাথে শেয়ার করে ভাব পেটাতে পারবে।',
    'কিভাবে ইঞ্জিনিয়ারিং বিশ্ববিদ্যালয়, সাধারণ বিশ্ববিদ্যালয় এবং বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় গুলোতে চান্স পাওয়া যায়, এই বিষয়ে আলোচনা করব।',
    ' যে লিখিত এবং MCQ পরীক্ষা মিলে নাম্বার ১ পজিশনে থাকবে, তার কোর্সের টাকাটা আমি ফেরত দিবো।',
    'তোমার যত প্রশ্ন বা সাজেশন থাকবে গ্রুপে জয়েন করে বলে দাও। অথবা 01788262433 নাম্বারে কল দাও।',
    'কোর্সটি ইনরোল করে ফেলো। তোমাকে বস বানোনোর দায়িত্ব আমাদের।'     
] 

    return (
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >

            <Grid item xs={3}>
                <List sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                            <ListItem
                                key={value}
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={nirdeSona[value]} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Grid>
        </Grid>
    );
};

export default Nirdesona;