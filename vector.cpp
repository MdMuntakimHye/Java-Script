#include<bits/stdc++.h>
using namespace std;

void explainVector(){
    vector<int> v;
    v.push_back(1);
    v.push_back(3);
    v.push_back(5);
    v.push_back(7);

    cout << v[0] << " " << v[1] << endl;

    v.emplace_back(2);
    cout << v[4] << endl;

    //pair
    vector<pair<int,int>>vec;
    vec.push_back({3,4});
    vec.emplace_back(1,2);

    cout << vec[0].first << " for pushback " << vec[0].second << endl;
    cout << vec[1].first << " for emplace back " << vec[1].second << endl;

    vector<int> v1(5,20);
    vector<int> v2(4,34);

    vector<int>::iterator it = v1.begin();
    it++;
    cout << *(it) << " ";
    for(auto& p : v1){
        cout << p;
    }
    cout << endl;

    //v2
    for(auto& p: v2){
        cout << p << " ";
    }
    vec.push_back({5,6});
    vec.emplace_back(7,8);

    for(auto& p : vec){
        cout << "(" << p.first << "," << p.second <<")"<< endl;
    }

    cout << endl;

    for(auto k:vec){
        cout << "(" << k.first << "," << k.second <<")"<< endl;
 
    }
    cout << endl;
    vector<int> v3 = {10, 20, 30, 40, 50};

    //vector size

    cout << v3.size() << endl;
    if(v3.size() > 0) cout << "vector is not empty" << endl;
    //begin
    cout << *v3.begin() << endl;
    //end
    cout << *(v3.end()-1) << endl; 
    cout <<  *(v3.end()) << endl;
    
    //printing the vector

    for(auto it = v3.begin(); it != v3.end(); it++){
        cout << *it << " ";
    }
}

int main(){

    explainVector();

    return 0;
}